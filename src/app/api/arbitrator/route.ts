import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// This client should be created in a separate lib file for reusability,
// but for now, we'll create it here for simplicity.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: Request) {
  const cycleId = `cycle_${new Date().getTime()}`;
  console.log(`Arbitrator: AAL Cycle ${cycleId} initiated.`);

  // --- DATABASE INTERACTION ---
  try {
    const logEntry = {
      cycle_id: cycleId,
      source: 'Arbitrator',
      log_type: 'SYSTEM',
      message: 'AAL Cycle Initiated by Architect.',
    };

    const { data, error } = await supabase
      .from('system_logs')
      .insert([logEntry])
      .select()
      .single();

    if (error) {
      throw error;
    }

    console.log('Log created successfully:', data);
    return NextResponse.json({ status: 'AAL Cycle Queued & Logged', cycleId: cycleId, logId: data.id });

  } catch (error: any) {
    console.error('Database Error:', error.message);
    return NextResponse.json({ error: `Database Error: ${error.message}` }, { status: 500 });
  }
  // --- END DATABASE INTERACTION ---
}